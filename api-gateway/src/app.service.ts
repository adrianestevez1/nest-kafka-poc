import { Inject, Injectable } from '@nestjs/common';
import { CreateOrderRequestDTO } from './create-order-request.dto';
import { ClientKafka } from '@nestjs/microservices';
import { OrderCreatedEvent } from './order_created.event';

@Injectable()
export class AppService {

  constructor(
    @Inject('BILLING_SERVICE') private readonly billingClient: ClientKafka,
  ) {}

  getHello(): string {
    return 'Hello World!';
  }

  createOrder({userId, price} : CreateOrderRequestDTO): void {
    console.log('createOrder', new OrderCreatedEvent('123',userId, price).toString());
    this.billingClient.emit(
      'order_created', 
      new OrderCreatedEvent('123',userId, price)
    );
  }
}
