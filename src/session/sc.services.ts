import { Injectable, Scope } from '@nestjs/common';

@Injectable()
export class UserSessionService {}

@Injectable({ scope: Scope.REQUEST })
export class RequestSessionService {}

@Injectable({ scope: Scope.TRANSIENT })
export class TransientService {}
