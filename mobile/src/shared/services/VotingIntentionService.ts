import api from './api';

import {ICandidate} from '../interfaces/ICandidate';

class VotingIntentionService {
  public async listVotingIntention() {
    try {
      const {data} = await api.get<Array<ICandidate>>('/votingIntention');

      return data;
    } catch (error) {
      console.log(error);
      return [];
    }
  }

  // public async createVotingIntention(candidate: ICandidate) {
  // try {
  //   const response = await api.post(`/votingIntention/${userId}`, candidate);

  //   return response;
  // } catch (error) {
  //   console.log(error);
  //   return null;
  // }
  // }

  // public async removeVotingIntention(name: string) {
  //   try {
  //     const response = await api.delete(`/votingIntention/${userId}/${name}`);

  //     return response;
  //   } catch (error) {
  //     console.log(error);
  //     return null;
  //   }
  // }
}

export default new VotingIntentionService();
