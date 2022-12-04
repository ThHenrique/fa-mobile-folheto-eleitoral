import api from './api';

import {ICandidate} from '../interfaces/ICandidate';
import CandidateImage from '../utils/handler/CandidateImage';

class VotingIntentionService {
  public async listVotingIntention() {
    try {
      const {data} = await api.get<Array<ICandidate>>('/votingIntention');

      const refreshDate = CandidateImage.handleCandidateImageList(data);

      return refreshDate;
    } catch (error) {
      console.log(error);
      return [];
    }
  }

  public async createVotingIntention(candidateId: string) {
    try {
      const response = await api.post(`/votingIntention/${candidateId}`);

      return response;
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  public async removeVotingIntention(candidateId: string) {
    try {
      const response = await api.delete(`/votingIntention/${candidateId}`);

      return response;
    } catch (error) {
      console.log(error);
      return null;
    }
  }
}

export default new VotingIntentionService();
