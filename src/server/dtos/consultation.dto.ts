import {
  Consultation,
  Mission,
  ProfitInfo,
  Profits,
  Proposal,
} from '@/src/server/domains/consultation';

export class ConsultationDto {
  id: string;
  userId: string;
  expertId: string;
  expertName: string;
  title: string;
  field: string;
  mainProposals: Proposal[];
  additionalProposals: Proposal[];
  status: string;
  createdAt: string;
  profits: Profits;
  profitInfo: ProfitInfo;
  weeklyMissions: Mission[];

  constructor(consultation: Consultation) {
    this.id = consultation.id;
    this.userId = consultation.userId;
    this.expertId = consultation.expertId;
    this.expertName = consultation.expertName;
    this.title = consultation.title;
    this.field = consultation.field;
    this.mainProposals = consultation.mainProposals;
    this.additionalProposals = consultation.additionalProposals;
    this.status = consultation.status;
    this.createdAt = consultation.createdAt;
    this.profits = consultation.profits;
    this.profitInfo = consultation.profitInfo;
    this.weeklyMissions = consultation.weeklyMissions;
  }
}
