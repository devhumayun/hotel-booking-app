import { userModel } from "@/models/user-model";
import { dbConnect } from "@/services/mongo-connection";
import { replaceMongoIdInObject } from "@/utils/data-util";

export const getUserByEmail = async (email) => {
  try {
    await dbConnect();
    const user = await userModel.find({ email: email }).lean();
    return replaceMongoIdInObject(user[0]);
  } catch (error) {
    throw new Error(error);
  }
};
