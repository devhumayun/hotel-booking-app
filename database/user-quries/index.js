import { userModel } from "@/models/user-model";
import { replaceMongoIdInObject } from "@/utils/data-util";

export const getUserByEmail = async (email) => {
  const user = await userModel.find({ email: email }).lean();
  console.log(user);

  return replaceMongoIdInObject(user[0]);
};
