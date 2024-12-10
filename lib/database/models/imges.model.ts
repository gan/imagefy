import { model, Document, models, Schema } from "mongoose"


export interface IImage extends Document {  
    title: string;                     // Title of the image  
    transformationType: string;       // Type of transformation applied to the image  
    publicId: string;                 // Public ID for the image  
    secureUrl: string;                // Secure URL of the image  
    width?: number;                   // Width of the image (optional)  
    height?: number;                  // Height of the image (optional)  
    config?: object;     // Configuration object (optional)  
    transformationUrl?: string;       // URL for the transformation (optional)  
    aspectRatio?: string;             // Aspect ratio of the image (optional)  
    color?: string;                   // Color representation (optional)  
    prompt?: string;                  // Prompt used for generating the image (optional)  
    author?: {
        _id: string;
        firstName: string;
        lastName: string;
        email: string;
        avatar: string;
    };                // Reference to the author (optional)  
    createdAt?: Date;                 // Creation date (optional)  
    updatedAt?: Date;                 // Update date (optional)  
}  

const ImageSchema = new Schema({
    title: { type: String, required: true },
    transformationType: { type: String, required: true },
    publicId: { type: String, required: true },
    secureUrl: { type: URL, required: true },
    width: { type: Number},
    height: { type: Number},
    config: { type: Object},
    transformationUrl: { type: URL},
    aspectRatio: { type: String},
    color: { type: String},
    prompt: { type: String},
    author: { type: Schema.Types.ObjectId, ref: "User"},
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
})

const Image = models?.Image || model("Image", ImageSchema);

export default Image;