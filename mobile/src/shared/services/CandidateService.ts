import api from './api';

import {ICandidate, ICandidateImage} from '../interfaces/ICandidate';

class CandidateService {
  public async listCandidates() {
    try {
      const {data} = await api.get<Array<ICandidate>>('/candidates');

      const refreshDate = this.handleCandidateImageList(data);

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
        const refreshFile = this.createBase64File(data.image);

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

  private handleCandidateImageList(candidates: Array<ICandidate>) {
    return candidates.map(candidate => {
      if (candidate.image) {
        candidate.image.base64 = this.createBase64File(candidate.image);
      }
      return candidate;
    });
  }

  private createBase64File(image: ICandidateImage) {
    const {extension, base64} = image;

    const base64File = `data:image/${extension};base64,`.concat(base64);

    return base64File;
  }
}

export default new CandidateService();
