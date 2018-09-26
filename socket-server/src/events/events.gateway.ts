import { WebSocketGateway, SubscribeMessage } from '@nestjs/websockets';

@WebSocketGateway(81)
export class EventsGateway {

  @SubscribeMessage('events')
  onEvent(client, data) {
    return data;
  }
}