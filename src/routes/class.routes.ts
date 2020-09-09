import { Router } from 'express';
import { getRepository, getCustomRepository } from 'typeorm';
import Class from '../models/Class';
import ClassRepository from '../repositories/ClassRepository';

const classRouter = Router();

classRouter.post('/', async (request, response) => {
  try {
    const repo = getRepository(Class);

    const res = await repo.save(request.body);
    return response.status(201).json(res);
  } catch (error) {
    console.log('err', error.message);
    return response.status(400);
  }
});

classRouter.get('/', async (request, response) => {
  try {
    const repo = getRepository(Class);

    const res = await repo.find();
    return response.status(201).json(res);
  } catch (error) {
    console.log('err', error.message);
    return response.status(400);
  }
});

classRouter.get('/:name', async (request, response) => {
  try {
    const repo = getCustomRepository(ClassRepository);

    const res = await repo.findByName(request.params.name);

    return response.status(201).json(res);
  } catch (error) {
    console.log('err', error.message);
    return response.status(400);
  }
});

export default classRouter;
