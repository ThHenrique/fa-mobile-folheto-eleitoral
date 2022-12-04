import {ICandidate, ICandidateImage} from '../../interfaces/ICandidate';

class CandidateImage {
  public handleCandidateImageList(candidates: Array<ICandidate>) {
    return candidates.map(candidate => {
      if (candidate.image) {
        candidate.image.base64 = this.createBase64File(candidate.image);
      }
      return candidate;
    });
  }

  public createBase64File(image: ICandidateImage) {
    const {extension, base64} = image;

    const base64File = `data:image/${extension};base64,`.concat(base64);

    return base64File;
  }
}

export default new CandidateImage();
