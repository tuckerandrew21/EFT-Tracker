// Stub for @upstash/ratelimit used in testing
export class Ratelimit {
  constructor(_opts?: any) {}
  async limit(_identifier: string): Promise<any> {
    return {
      success: true,
      limit: 10,
      remaining: 9,
      reset: Math.floor(Date.now() / 1000) + 60,
      pending: Promise.resolve(),
    };
  }
}
