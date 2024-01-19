import { consulta } from "../database/conexao.js";

class SelecaoRepository {
    // CRUD
    create(selecao) {
        const sql = "INSERT INTO selecoes SET ?;"
        return consulta(sql, selecao, 'Seleção não Cadastrada !')
    }

    findAll() {
        const sql = "SELECT * from selecoes;"
        return consulta(sql, 'Não foi possível localizar selecao!')
    }

    findById(id) {
        const sql = "SELECT * from selecoes WHERE id=?;"
        return consulta(sql, id, 'Seleção não Encontrada !')
    }

    update(selecao, id) {
        const sql = "UPDATE selecoes SET ? WHERE id=?;"
        return consulta(sql, [selecao, id], 'Não foi possível Atualizar Seleção !')
    }

    delete(id) {
        const sql = "DELETE from selecoes WHERE id=?;"
        return consulta(sql, id, 'Não foi possível Apagar Seleção!')
    }

}

export default new SelecaoRepository()