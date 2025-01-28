import Message from '../models/messsage.model.js'


const message={

    messageUpload: async (req,res)=>{

        try{

        const {fullName,phoneNumber,email,message}=req.body;

        const newMessage     = new Message({ fullName, phoneNumber, email, message });

        await newMessage.save()

        res.status(201).json({ message: 'Message information saved successfully!', message: newMessage });

        }catch{
            res.status(400).json({ error: err.message });
        }

        
       

    }
}
export default message