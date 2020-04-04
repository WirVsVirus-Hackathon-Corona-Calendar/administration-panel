/* eslint-disable @typescript-eslint/camelcase */

/* export interface Challenge {
  readonly id: number;
  readonly order: number;
  title: string;
  body: string;
  iconUrl: string;
} */

export interface ChallengeDto {
  readonly id: number;
  readonly order: number;
  readonly title: string;
  readonly body: string;
  readonly icon_url: string;
}

export class Challenge {
  // eslint-disable-next-line no-useless-constructor
  constructor(
    public readonly id: number,
    public readonly order: number,
    public title: string,
    public body: string,
    public iconUrl: string,
  ) { }

  static fromDto(dto: ChallengeDto) {
    return new Challenge(
      dto.id,
      dto.order,
      dto.title,
      dto.body,
      dto.icon_url,
    );
  }

  public toDto(): ChallengeDto {
    return {
      id: this.id,
      order: this.order,
      title: this.title,
      body: this.body,
      icon_url: this.iconUrl,
    };
  }
}
