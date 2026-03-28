import type React from "react";
import type { JSX } from "react/jsx-runtime";

export interface UploadZoneProps {
    label : string;
    file : File | null;
    onClear: () => void;
    onChange : (e : React.ChangeEvent<HTMLInputElement>) => void;
}


export interface User {
    id?: string;
    name?: string;
    email?: string;
}


export interface Project {
    map(arg0: (gen: any) => JSX.Element): React.ReactNode;
    id : string;
    name?: string;
    userId?: string;
    user?: User;
    productName : string;
    productDescription?: string;
    userPrompt?: string;
    aspectRatio: string;
    targetLength?: number;
    generatedImage?: string;
    generatedVideo?: string;
    isGenerating: boolean;
    isPublished: boolean;
    error?: string;
    createdAt : Date | string;
    updatedAt?: Date | string;
    uploadedImages: string[];
}