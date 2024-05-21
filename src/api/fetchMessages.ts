import getMessages from "@/constants/message";
import { setLoading, setMessages } from "@/store/message/messageReducer";
import { AppDispatch } from "@/store";
import { selectMessage } from "@/store/selectedmessage/selectedMessageReducer";
import { getFirstMessageId } from "@/utils/selectMessage";

const fetchMessages = () => async (dispatch: AppDispatch) => {
  dispatch(setLoading(true));
  try {
    const messages = await getMessages();
    dispatch(setMessages(messages));
    dispatch(selectMessage(getFirstMessageId(messages)));
  } catch (error) {
    console.error("Failed to fetch messages:", error);
  }
};

export default fetchMessages;
