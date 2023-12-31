
import  {Schema, model,models} from "mongoose";
const clickSchema = new Schema({
    timestamp: { type: Date, default: Date.now },
    ipAddress: String,
    city: String,
    region: String,
    country: String,
  });
const linkSchema = new Schema({
    creator: {
        type:Schema.Types.ObjectId,
        ref:'User',
    },
    name: String,
    originalUrl: String,
    genteratedLink: String,
    createdAt: { type: Date, default: Date.now },
    clicks: { type: Number, default: 0 },
    location: [clickSchema]
});
const Link = models.Link || model('Link', linkSchema);

export default Link;
