import { Challenge, ChallengeDto } from './challenge';

class ChallengesService {
  private challenges: Challenge[] = [];

  public async loadChallenges(): Promise<Challenge[]> {
    const resp = await Promise.resolve({
      data: [
        {
          id: 1,
          order: 1,
          title: 'Title of A',
          body: 'Body of A',
          // eslint-disable-next-line @typescript-eslint/camelcase
          icon_url: 'Some URL',
        },
        {
          id: 2,
          order: 2,
          title: 'Title of B',
          body: 'Body of B',
          // eslint-disable-next-line @typescript-eslint/camelcase
          icon_url: 'Some URL',
        },
      ],
    });

    if (!resp) {
      alert('Could not load challenges.');
      return [];
    }

    const data = resp.data as ChallengeDto[];

    const challenges = data.map((c) => Challenge.fromDto(c));

    this.challenges = challenges;

    return challenges;
  }

  public getChallenge(id: number): Challenge | undefined {
    return this.challenges.find((c) => c.id === id);
  }
}

export default new ChallengesService();
