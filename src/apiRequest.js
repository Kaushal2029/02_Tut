const apiRequest = async (url = "", optionObj = null, eMsg = null) => {
  try {
    const response = await fetch(url, optionObj);
    if (!response.ok) throw Error("Please reload the app");
  } catch (e) {
    eMsg = e.messsage;
  } finally {
    return eMsg;
  }
};

export default apiRequest;
