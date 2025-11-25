"use client";

import { db } from "../config";
import {
  collection,
  addDoc,
  doc,
  setDoc,
  deleteDoc,
  getDocs,
  getDoc,
  CollectionReference,
  DocumentData,
  QueryDocumentSnapshot,
  SnapshotOptions,
  FirestoreDataConverter,
} from "firebase/firestore";
import Cliente from "../../core/Cliente";
import ClienteRepositorio from "../../core/ClienteRepositorio";

export default class ColecaoCliente implements ClienteRepositorio {
  // Conversor tipado para Firebase modular
  #conversor: FirestoreDataConverter<Cliente> = {
    toFirestore(cliente: Cliente) {
      return {
        nome: cliente.nome,
        idade: cliente.idade,
      };
    },

    fromFirestore(
      snapshot: QueryDocumentSnapshot<DocumentData>,
      options: SnapshotOptions
    ): Cliente {
      const dados = snapshot.data(options)!;
      return new Cliente(dados.nome, dados.idade, snapshot.id);
    },
  };

  // Coleção com conversor
  private colecao(): CollectionReference<Cliente> {
    if (!db) throw new Error("Firebase não inicializado! Use apenas no cliente.");
    return collection(db, "clientes").withConverter(this.#conversor);
  }

  // Salvar cliente
  async salvar(cliente: Cliente): Promise<Cliente> {
    const colecaoRef = this.colecao();

    if (cliente?.id) {
      // Atualizar
      const docRef = doc(colecaoRef, cliente.id);
      await setDoc(docRef, cliente);
      return cliente;
    } else {
      // Criar novo
      const docRef = await addDoc(colecaoRef, cliente);

      const snapshot = await getDoc(docRef);
      return snapshot.data()!; // já vem convertido pelo converter
    }
  }

  // Excluir cliente
  async excluir(cliente: Cliente): Promise<void> {
    const docRef = doc(this.colecao(), cliente.id!);
    await deleteDoc(docRef);
  }

  // Buscar todos
  async obterTodos(): Promise<Cliente[]> {
    const colecaoRef = this.colecao();
    const querySnapshot = await getDocs(colecaoRef);
    return querySnapshot.docs.map(doc => doc.data());
  }
}