export interface ICandidateImage {
  filename: string;
  extension: string;
  base64: string;
}

export interface ICandidate {
  id: string;
  NM_CANDIDATO: string;
  NM_EMAIL: string;
  NR_CPF_CANDIDATO: string;

  DS_NACIONALIDADE: string;
  NM_MUNICIPIO_NASCIMENTO: string;
  DS_GRAU_INSTRUCAO: string;
  DS_ESTADO_CIVIL: string;
  DS_OCUPACAO: string;

  NR_IDADE_DATA_POSSE: number;
  DT_NASCIMENTO: Date;
  SG_UF_NASCIMENTO: string;

  NM_URNA_CANDIDATO: string;
  DS_CARGO: string;
  NM_UE: string;
  ANO_ELEICAO: string;
  NR_CANDIDATO: number;

  NR_PARTIDO: number;
  NM_PARTIDO: string;
  SG_PARTIDO: string;
  VR_DESPESA_MAX_CAMPANHA: number;

  image: ICandidateImage | null;
}
