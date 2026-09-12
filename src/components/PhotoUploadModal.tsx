import React, { useRef, useState } from 'react';
import { usePhotos } from '../context/PhotoContext';
import { X, Upload, CheckCircle2, Image as ImageIcon, Sparkles, AlertCircle, ShieldCheck } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const PhotoUploadModal: React.FC = () => {
  const {
    isModalOpen,
    closeModal,
    iconPhoto,
    professionPhoto,
    uploadPhoto,
    activeTab,
    setActiveTab,
  } = usePhotos();

  const [isDragging, setIsDragging] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const iconInputRef = useRef<HTMLInputElement>(null);
  const professionInputRef = useRef<HTMLInputElement>(null);

  if (!isModalOpen) return null;

  const handleFileChange = async (type: 'icon' | 'profession', file: File) => {
    setUploading(true);
    setSuccessMessage(null);
    const success = await uploadPhoto(type, file);
    setUploading(false);
    if (success) {
      setSuccessMessage(
        type === 'icon'
          ? 'Icon & Favicon photo updated successfully with your exact uploaded image!'
          : 'Professional profile photo updated successfully with your exact uploaded image!'
      );
      setTimeout(() => setSuccessMessage(null), 4000);
    }
  };

  const onDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const onDragLeave = () => {
    setIsDragging(false);
  };

  const onDrop = (e: React.DragEvent, type: 'icon' | 'profession') => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileChange(type, e.dataTransfer.files[0]);
    }
  };

  return (
    <div
      id="photo-upload-modal-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in"
      onClick={closeModal}
    >
      <div
        id="photo-upload-modal"
        className="relative w-full max-w-2xl bg-neutral-900 border border-neutral-800 rounded-2xl shadow-2xl p-6 sm:p-8 text-left text-neutral-100 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          id="close-photo-modal-btn"
          onClick={closeModal}
          className="absolute top-4 right-4 p-2 rounded-xl text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-xs font-semibold text-emerald-400 mb-2">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>100% Original Photo — Zero Face Alteration</span>
          </div>
          <h3 className="text-2xl font-bold text-white tracking-tight">
            Select Your Uploaded Photos
          </h3>
          <p className="text-sm text-neutral-400 mt-1">
            Assign your original WhatsApp photos as requested: one for the <strong>site icon/favicon</strong> and one for your <strong>professional profile</strong>.
          </p>
        </div>

        {/* Tab Selection */}
        <div className="flex border-b border-neutral-800 mb-6 gap-2">
          <button
            id="tab-icon-photo"
            onClick={() => setActiveTab('icon')}
            className={`pb-3 px-4 text-sm font-semibold border-b-2 transition-all flex items-center gap-2 ${
              activeTab === 'icon'
                ? 'border-emerald-500 text-emerald-400'
                : 'border-transparent text-neutral-400 hover:text-neutral-200'
            }`}
          >
            <ImageIcon className="w-4 h-4" />
            <span>1. Icon & Favicon</span>
          </button>
          <button
            id="tab-profession-photo"
            onClick={() => setActiveTab('profession')}
            className={`pb-3 px-4 text-sm font-semibold border-b-2 transition-all flex items-center gap-2 ${
              activeTab === 'profession'
                ? 'border-emerald-500 text-emerald-400'
                : 'border-transparent text-neutral-400 hover:text-neutral-200'
            }`}
          >
            <Sparkles className="w-4 h-4" />
            <span>2. Profession Profile</span>
          </button>
        </div>

        {/* Success Alert */}
        {successMessage && (
          <div className="mb-6 p-4 rounded-xl bg-emerald-950/40 border border-emerald-500/40 text-emerald-300 text-sm flex items-center gap-3">
            <CheckCircle2 className="w-5 h-5 shrink-0 text-emerald-400" />
            <span>{successMessage}</span>
          </div>
        )}

        {/* Tab Content 1: ICON PHOTO */}
        {activeTab === 'icon' && (
          <div className="space-y-6">
            <div className="p-4 rounded-xl bg-neutral-950/60 border border-neutral-800 text-sm space-y-2">
              <div className="font-semibold text-white flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                <span>Role: Website Icon, Favicon & Hero Status Badge</span>
              </div>
              <p className="text-neutral-400 text-xs leading-relaxed">
                Appears on browser tabs, the header brand icon, the hero badge avatar, and the footer.
                <br />
                <strong className="text-neutral-300">Recommended uploaded image:</strong> Your photo in the black t-shirt (<code>WhatsApp Image 2026-09-12 at 09.07.58 (1).jpeg</code>).
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
              {/* Preview */}
              <div className="sm:col-span-5 flex flex-col items-center justify-center p-4 rounded-xl bg-neutral-950 border border-neutral-800">
                <span className="text-xs text-neutral-500 mb-2 font-medium">Current Icon Preview</span>
                <img
                  src={iconPhoto}
                  alt="Icon Preview"
                  referrerPolicy="no-referrer"
                  className="w-24 h-24 rounded-2xl object-cover border-2 border-emerald-500/40 shadow-lg"
                />
                <span className="text-[11px] text-emerald-400 mt-2 font-medium">Browser Favicon & Badge</span>
              </div>

              {/* Upload Dropzone */}
              <div
                onDragOver={onDragOver}
                onDragLeave={onDragLeave}
                onDrop={(e) => onDrop(e, 'icon')}
                onClick={() => iconInputRef.current?.click()}
                className={`sm:col-span-7 flex flex-col items-center justify-center p-6 border-2 border-dashed rounded-2xl cursor-pointer transition-all ${
                  isDragging
                    ? 'border-emerald-500 bg-emerald-500/10'
                    : 'border-neutral-750 hover:border-emerald-500/60 bg-neutral-950/40 hover:bg-neutral-950/80'
                }`}
              >
                <input
                  ref={iconInputRef}
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={(e) => {
                    if (e.target.files && e.target.files[0]) {
                      handleFileChange('icon', e.target.files[0]);
                    }
                  }}
                />
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-3">
                  <Upload className="w-6 h-6" />
                </div>
                <span className="text-sm font-semibold text-white text-center">
                  {uploading ? 'Processing original photo...' : 'Click or Drag to set Icon Photo'}
                </span>
                <span className="text-xs text-neutral-400 mt-1 text-center">
                  Select <code>WhatsApp Image 2026-09-12 at 09.07.58 (1).jpeg</code>
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Tab Content 2: PROFESSION PHOTO */}
        {activeTab === 'profession' && (
          <div className="space-y-6">
            <div className="p-4 rounded-xl bg-neutral-950/60 border border-neutral-800 text-sm space-y-2">
              <div className="font-semibold text-white flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                <span>Role: Professional Developer Showcase & About Section</span>
              </div>
              <p className="text-neutral-400 text-xs leading-relaxed">
                Appears prominently in the <strong>About Me</strong> section on your verified developer credentials card.
                <br />
                <strong className="text-neutral-300">Recommended uploaded image:</strong> Your formal photo in the blue patterned shirt with collar (<code>WhatsApp Image 2026-09-12 at 09.07.58.jpeg</code>).
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
              {/* Preview */}
              <div className="sm:col-span-5 flex flex-col items-center justify-center p-4 rounded-xl bg-neutral-950 border border-neutral-800">
                <span className="text-xs text-neutral-500 mb-2 font-medium">Profile Card Preview</span>
                <img
                  src={professionPhoto}
                  alt="Profession Profile Preview"
                  referrerPolicy="no-referrer"
                  className="w-24 h-24 rounded-2xl object-cover border-2 border-emerald-500/40 shadow-lg"
                />
                <span className="text-[11px] text-emerald-400 mt-2 font-medium">About Section Profile</span>
              </div>

              {/* Upload Dropzone */}
              <div
                onDragOver={onDragOver}
                onDragLeave={onDragLeave}
                onDrop={(e) => onDrop(e, 'profession')}
                onClick={() => professionInputRef.current?.click()}
                className={`sm:col-span-7 flex flex-col items-center justify-center p-6 border-2 border-dashed rounded-2xl cursor-pointer transition-all ${
                  isDragging
                    ? 'border-emerald-500 bg-emerald-500/10'
                    : 'border-neutral-750 hover:border-emerald-500/60 bg-neutral-950/40 hover:bg-neutral-950/80'
                }`}
              >
                <input
                  ref={professionInputRef}
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={(e) => {
                    if (e.target.files && e.target.files[0]) {
                      handleFileChange('profession', e.target.files[0]);
                    }
                  }}
                />
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-3">
                  <Upload className="w-6 h-6" />
                </div>
                <span className="text-sm font-semibold text-white text-center">
                  {uploading ? 'Processing original photo...' : 'Click or Drag to set Profession Photo'}
                </span>
                <span className="text-xs text-neutral-400 mt-1 text-center">
                  Select <code>WhatsApp Image 2026-09-12 at 09.07.58.jpeg</code>
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Modal Footer Note */}
        <div className="mt-8 pt-5 border-t border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
          <div className="flex items-center gap-2">
            <AlertCircle className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Exact pixels uploaded from your device are applied with zero AI distortion or modification.</span>
          </div>
          <button
            id="modal-done-btn"
            onClick={closeModal}
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-neutral-950 font-bold transition-colors"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};
