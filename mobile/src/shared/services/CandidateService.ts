import api from './api';

import {ICandidate} from '../interfaces/ICandidate';

class CandidateService {
  public async listCandidates() {
    try {
      const {data} = await api.get<Array<ICandidate>>('/candidates');

      return data;
    } catch (error) {
      console.error(error);
      return [];
    }
  }

  public async getCandidate(name: string) {
    try {
      const {data} = await api.get<ICandidate>(`/candidate/${name}`);

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
