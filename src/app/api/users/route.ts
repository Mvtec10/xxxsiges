import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
  const usuarios = await prisma.usuario.findMany();
  return NextResponse.json(usuarios);
}

export async function POST(req: Request) {
  const { nome, email, senha } = await req.json();
  const novoUsuario = await prisma.usuario.create({
    data: { nome, email, senha },
  });
  return NextResponse.json(novoUsuario);
}
