export class ConfigService {
  private urlService: string;

  constructor() {
    this.urlService = 'http://localhost:3000';
  }

  getUrlService(): string {
    return this.urlService;
  }

}
