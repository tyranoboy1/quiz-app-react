import axios from "axios";

const baseURL = "https://opentdb.com/api.php?amount=";

export const getQuestionList = async (
  amount: number,
  difficulty: string
): Promise<any> => {
  try {
    const res = await axios.get(
      `${baseURL}+${amount}&difficulty=${difficulty}&type=boolean`
    );
    return res.data;
  } catch (e) {
    throw new Error(`Error ${e}`);
  }
};
