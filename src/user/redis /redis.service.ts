import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { createClient, RedisClientType } from 'redis';

@Injectable()
export class RedisService implements OnModuleInit, OnModuleDestroy {
  private client: RedisClientType;

  async onModuleInit() {
    this.client = createClient();
    this.client.on('error', (err) => console.error('Redis error:', err));
    await this.client.connect();
    console.log('Redis connected successfully');
  }

  async onModuleDestroy() {
    if (this.client) {
      await this.client.quit();
      console.log('Redis disconnected');
    }
  }

  getClient(): RedisClientType {
    return this.client;
  }
}
