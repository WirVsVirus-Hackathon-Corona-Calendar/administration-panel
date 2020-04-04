import { axios } from '@/utils';
import { Challenge, ChallengeDto } from './challenge';

class ChallengesService {
  private _challenges: Challenge[] = [];

  public async loadChallenges(): Promise<Challenge[]> {
    const resp = await axios
      .get('/challenges')
      .catch(console.error);

    if (!resp) {
      alert('Could not load challenges.');
      return [];
    }

    const data = resp.data as ChallengeDto[];

    const challenges = data.map((c) => Challenge.fromDto(c));

    this._challenges = challenges;

    return challenges;
  }

  public getChallenge(id: number): Challenge | undefined {
    return this._challenges.find((c) => c.id === id);
  }

  public get challenges(): Challenge[] {
    return this._challenges;
  }
}

export default new ChallengesService();
