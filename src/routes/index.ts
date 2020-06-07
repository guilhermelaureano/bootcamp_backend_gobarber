import { Router } from 'express';
import appointmentsRoutes from './appointments.routes';
import sessionsRoutes from './sessions.routes';
import usersRoutes from './users.routes';

const routes = Router();

routes.use('/appointments', appointmentsRoutes);
routes.use('/sessions', sessionsRoutes);
routes.use('/users', usersRoutes);

export default routes;
