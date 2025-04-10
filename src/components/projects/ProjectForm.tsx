import React from 'react';
import { useForm } from 'react-hook-form';

interface ProjectFormData {
  title: string;
  description: string;
  techStack: string;
  roleNeeded: string;
  equity: string;
  stage: string;
  location: string;
}

interface ProjectFormProps {
  onSubmit: (data: ProjectFormData) => void;
  initialData?: ProjectFormData;
}

export default function ProjectForm({ onSubmit, initialData }: ProjectFormProps) {
  const { register, handleSubmit, formState: { errors } } = useForm<ProjectFormData>({
    defaultValues: initialData
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div>
        <label htmlFor="title" className="block text-sm font-medium mb-2">
          Project Title
        </label>
        <input
          id="title"
          {...register('title', { required: 'Title is required' })}
          className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500"
        />
        {errors.title && (
          <p className="text-red-500 text-sm mt-1">{errors.title.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="description" className="block text-sm font-medium mb-2">
          Project Description
        </label>
        <textarea
          id="description"
          rows={4}
          {...register('description', { required: 'Description is required' })}
          className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500"
        />
        {errors.description && (
          <p className="text-red-500 text-sm mt-1">{errors.description.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="techStack" className="block text-sm font-medium mb-2">
          Tech Stack
        </label>
        <input
          id="techStack"
          {...register('techStack', { required: 'Tech stack is required' })}
          placeholder="e.g., React, Node.js, PostgreSQL"
          className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500"
        />
        {errors.techStack && (
          <p className="text-red-500 text-sm mt-1">{errors.techStack.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="roleNeeded" className="block text-sm font-medium mb-2">
          Role Needed
        </label>
        <input
          id="roleNeeded"
          {...register('roleNeeded', { required: 'Role is required' })}
          placeholder="e.g., Full-Stack Developer, Frontend Developer"
          className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500"
        />
        {errors.roleNeeded && (
          <p className="text-red-500 text-sm mt-1">{errors.roleNeeded.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="equity" className="block text-sm font-medium mb-2">
          Equity Offered
        </label>
        <input
          id="equity"
          {...register('equity', { required: 'Equity is required' })}
          placeholder="e.g., 5-10%"
          className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500"
        />
        {errors.equity && (
          <p className="text-red-500 text-sm mt-1">{errors.equity.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="stage" className="block text-sm font-medium mb-2">
          Project Stage
        </label>
        <select
          id="stage"
          {...register('stage', { required: 'Stage is required' })}
          className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500"
        >
          <option value="">Select stage</option>
          <option value="idea">Idea Stage</option>
          <option value="mvp">MVP</option>
          <option value="beta">Beta</option>
          <option value="launched">Launched</option>
        </select>
        {errors.stage && (
          <p className="text-red-500 text-sm mt-1">{errors.stage.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="location" className="block text-sm font-medium mb-2">
          Location
        </label>
        <input
          id="location"
          {...register('location', { required: 'Location is required' })}
          placeholder="e.g., Remote, San Francisco, London"
          className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500"
        />
        {errors.location && (
          <p className="text-red-500 text-sm mt-1">{errors.location.message}</p>
        )}
      </div>

      <button
        type="submit"
        className="w-full bg-gradient-to-r from-cyan-500 to-emerald-500 text-white py-3 rounded-lg hover:opacity-90 transition-opacity font-medium"
      >
        {initialData ? 'Update Project' : 'Create Project'}
      </button>
    </form>
  );
}