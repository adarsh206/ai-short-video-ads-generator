import { verifyWebhook } from '@clerk/express/webhooks'
import { Request, Response } from "express"
import { prisma } from '../configs/prisma.js';

const clerkWebhooks = async (req: Request, res: Response) => {

    try {
        const evt: any = await verifyWebhook(req);

        // Getting Data from request
        const { data, type } = evt;

        // Switch Cases for different Events
        switch (type) {
            case "user.created": {
                await prisma.user.create({
                    data: {
                        id: data.id,
                        email: data?.email_email_addresses[0]?.email_address,
                        name: data?.first_name + " " + data?.last_name,
                        image: data?.image_url,
                    }
                })
                break;
            }
        
            default:
                break;
        }
    } catch (error) {
        
    }
}