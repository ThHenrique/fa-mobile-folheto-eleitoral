import api from './api';

import {ICandidate} from '../interfaces/ICandidate';

import CandidateImage from '../utils/handler/CandidateImage';

class CandidateService {
  public async listCandidates() {
    try {
      const {data} = await api.get<Array<ICandidate>>('/candidates');

      const refreshDate = CandidateImage.handleCandidateImageList(data);

      return refreshDate;
    } catch (error) {
      console.error(error);
      return [];
    }
  }

  public async getCandidate(name: string) {
    try {
      const {data} = await api.get<ICandidate>(`/candidate/${name}`);

      if (data.image) {
        const refreshFile = CandidateImage.createBase64File(data.image);

        data.image.base64 = refreshFile;
      }

      return data;
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  public async listCandidatesPerPoliticalParty(politicalParty: string) {
    try {
      const {data} = await api.get<Array<ICandidate>>(
        `/candidates/politicalParty/${politicalParty}`,
      );

      return data;
    } catch (error) {
      console.log(error);
      return 'error';
    }
  }
}

export default new CandidateService();
