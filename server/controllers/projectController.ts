import { Request, Response } from 'express'
import * as Sentry from "@sentry/node"


// create project controller
export const createProject = async (req: Request, res : Response) => {
    try {
        let tempProjectId: string;
        const { userId } = req.auth();
        let isCreditDeducted = false;

        const { name = 'New Project', aspectRatio, userPrompt, productName, productDescription, targetLength = 5} = req.body;

        const images : any = req.files;
    } catch (error: any) {
        Sentry.captureException(error)
        res.status(500).json({ message : error.message })
    }
}


// create video controller
export const createVideo = async (req: Request, res : Response) => {
    try {
        
    } catch (error: any) {
        Sentry.captureException(error)
        res.status(500).json({ message : error.message })
    }
}


// get all published projects controller
export const getAllPublishedProjects = async (req: Request, res : Response) => {
    try {
        
    } catch (error: any) {
        Sentry.captureException(error)
        res.status(500).json({ message : error.message })
    }
}


//  delete project controller
export const deleteProject = async (req: Request, res : Response) => {
    try {
        
    } catch (error: any) {
        Sentry.captureException(error)
        res.status(500).json({ message : error.message })
    }
}