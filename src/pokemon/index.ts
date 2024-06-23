import { CardList, SupportedLanguages } from "@tcgdex/sdk";
import HttpService from "../utils/axios.util";

export default function getCardsByLanguage(
  language: SupportedLanguages
): Promise<CardList> {
  let httpService = new HttpService();
  return httpService.get(`https://api.tcgdex.net/v2/${language}/cards`).then();
}
