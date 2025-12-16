// Stub for @upstash/redis used in testing
export class Redis {
  constructor(_opts?: any) {}
  async get(_key: string): Promise<any> {
    return null;
  }
  async set(_key: string, _value: any): Promise<any> {
    return "OK";
  }
  async del(_key: string): Promise<any> {
    return 1;
  }
  async incr(_key: string): Promise<any> {
    return 1;
  }
  async expire(_key: string, _seconds: number): Promise<any> {
    return 1;
  }
}
