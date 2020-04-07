import { http } from '@/common/http';
import { Challenge, ChallengeDto } from './challenge';

class ChallengesService {
  private challenges: Challenge[] = [];

  public async loadChallenges(): Promise<Challenge[]> {
    const resp = await http
      .get('/challenges')
      .catch(console.error);

    if (!resp) {
      alert('Could not load challenges.');
      return [];
    }

    const data = resp.data as ChallengeDto[];

    const challenges = data.map((c) => Challenge.fromDto(c));

    this.challenges = challenges;

    return challenges;
  }

  public getChallenge(id: string): Challenge | undefined {
    return this.challenges.find((c) => c.id === id);
  }
}

export default new ChallengesService();
