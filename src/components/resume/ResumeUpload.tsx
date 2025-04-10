import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { Upload, File, X } from 'lucide-react';

interface ResumeUploadProps {
  onUpload: (file: File) => void;
  currentResume?: string;
  onRemove?: () => void;
}

export default function ResumeUpload({ onUpload, currentResume, onRemove }: ResumeUploadProps) {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles.length > 0) {
      onUpload(acceptedFiles[0]);
    }
  }, [onUpload]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'application/pdf': ['.pdf'],
      'application/msword': ['.doc'],
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document': ['.docx']
    },
    maxFiles: 1,
    multiple: false
  });

  if (currentResume) {
    return (
      <div className="bg-gray-800 p-4 rounded-lg">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <File size={24} className="text-cyan-500" />
            <div>
              <p className="font-medium">Current Resume</p>
              <p className="text-sm text-gray-400">{currentResume}</p>
            </div>
          </div>
          <button
            onClick={onRemove}
            className="p-2 hover:bg-gray-700 rounded-full transition-colors"
          >
            <X size={20} className="text-red-500" />
          </button>
        </div>
      </div>
    );
  }

  return (
    <div
      {...getRootProps()}
      className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors ${
        isDragActive
          ? 'border-cyan-500 bg-cyan-500/10'
          : 'border-gray-700 hover:border-cyan-500 hover:bg-gray-800'
      }`}
    >
      <input {...getInputProps()} />
      <Upload size={32} className="mx-auto mb-4 text-cyan-500" />
      <p className="text-lg font-medium mb-2">
        {isDragActive ? 'Drop your resume here' : 'Upload your resume'}
      </p>
      <p className="text-sm text-gray-400">
        Drag and drop your resume here, or click to select a file
      </p>
      <p className="text-xs text-gray-500 mt-2">
        Supported formats: PDF, DOC, DOCX (Max size: 5MB)
      </p>
    </div>
  );
}