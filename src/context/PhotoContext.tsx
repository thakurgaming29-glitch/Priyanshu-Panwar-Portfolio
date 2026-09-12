import React, { createContext, useContext, useState, useEffect } from 'react';
import { personalInfo } from '../data/portfolioData';

interface PhotoContextType {
  iconPhoto: string;
  professionPhoto: string;
  setIconPhoto: (url: string) => void;
  setProfessionPhoto: (url: string) => void;
  uploadPhoto: (type: 'icon' | 'profession', file: File) => Promise<boolean>;
  isModalOpen: boolean;
  openModal: (initialTab?: 'icon' | 'profession') => void;
  closeModal: () => void;
  activeTab: 'icon' | 'profession';
  setActiveTab: (tab: 'icon' | 'profession') => void;
}

const PhotoContext = createContext<PhotoContextType | undefined>(undefined);

const ICON_STORAGE_KEY = 'priyanshu_icon_photo_v2';
const PROFESSION_STORAGE_KEY = 'priyanshu_profession_photo_v2';

export const PhotoProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [iconPhoto, setIconPhotoState] = useState<string>(() => {
    return localStorage.getItem(ICON_STORAGE_KEY) || personalInfo.iconImage || '/icon.jpg';
  });

  const [professionPhoto, setProfessionPhotoState] = useState<string>(() => {
    return localStorage.getItem(PROFESSION_STORAGE_KEY) || personalInfo.professionImage || personalInfo.avatar || '/profile.jpg';
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'icon' | 'profession'>('icon');

  const openModal = (initialTab?: 'icon' | 'profession') => {
    if (initialTab) setActiveTab(initialTab);
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

  const setIconPhoto = (url: string) => {
    setIconPhotoState(url);
    localStorage.setItem(ICON_STORAGE_KEY, url);
  };

  const setProfessionPhoto = (url: string) => {
    setProfessionPhotoState(url);
    localStorage.setItem(PROFESSION_STORAGE_KEY, url);
  };

  const uploadPhoto = async (type: 'icon' | 'profession', file: File): Promise<boolean> => {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.onload = async (e) => {
        const base64 = e.target?.result as string;
        if (!base64) {
          resolve(false);
          return;
        }

        // 1. Immediately update UI state and local storage so the user sees their real photo instantly
        if (type === 'icon') {
          setIconPhoto(base64);
        } else {
          setProfessionPhoto(base64);
        }

        // 2. Persist to server /public/ folder via Vite dev endpoint
        try {
          const res = await fetch('/api/upload-photo', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              type,
              base64,
              filename: file.name,
            }),
          });
          if (res.ok) {
            const data = await res.json();
            if (data.url) {
              // file is now saved to disk in public/
              if (type === 'icon') {
                setIconPhoto(data.url);
              } else {
                setProfessionPhoto(data.url);
              }
            }
          }
        } catch (err) {
          console.warn('Server upload fallback to localStorage:', err);
        }

        resolve(true);
      };
      reader.onerror = () => resolve(false);
      reader.readAsDataURL(file);
    });
  };

  return (
    <PhotoContext.Provider
      value={{
        iconPhoto,
        professionPhoto,
        setIconPhoto,
        setProfessionPhoto,
        uploadPhoto,
        isModalOpen,
        openModal,
        closeModal,
        activeTab,
        setActiveTab,
      }}
    >
      {children}
    </PhotoContext.Provider>
  );
};

export const usePhotos = () => {
  const context = useContext(PhotoContext);
  if (!context) {
    throw new Error('usePhotos must be used within a PhotoProvider');
  }
  return context;
};
