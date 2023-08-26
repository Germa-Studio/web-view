import Api from "./base"

export const GetInfoTani = async()=>{
    try {
      const response = await Api.get("/info-tani");
      return response.data.infotani
    } catch (error) {
      // SweatAlert(String(error.response.data.message), 'error');
    }
}
export const getEventTani = async()=>{
    try {
      const response = await Api.get("/event-tani");
      return response.data.infotani
    } catch (error) {
      // SweatAlert(String(error.response.data.message), 'error');
    }
}