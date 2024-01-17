import conexao from "../database/conexao.js";

class SelecaoRepository {
    // CRUD
    create(selecao) {
        const sql = "INSERT INTO selecoes SET ?;"
        return new Promise((resolve, reject) => {
            conexao.query(sql, selecao, (erro, resultado) => {
                if(erro) return reject('Não foi possível Cadastrar Seleção')
                // Fazer o parse dos resultados
                const row = JSON.parse(JSON.stringify(resultado))
                return resolve(row)
            })
        })
    }

    findAll() {
        const sql = "SELECT * from selecoes;"
        return new Promise((resolve, reject) => {
            conexao.query(sql, (erro, resultado) => {
                if(erro) return reject('Não foi possível Localizar')
                // Fazer o parse dos resultados
                const row = JSON.parse(JSON.stringify(resultado))
                return resolve(row)
            })
        })
    }

    findById(id) {
        const sql = "SELECT * from selecoes WHERE id=?;"
        return new Promise((resolve, reject) => {
            conexao.query(sql, id, (erro, resultado) => {
                if(erro) return reject('Não foi possível Buscar Seleção')
                // Fazer o parse dos resultados
                const row = JSON.parse(JSON.stringify(resultado))
                return resolve(row)
            })
        })
        
    }

    update(selecao, id) {
        const sql = "UPDATE selecoes SET ? WHERE id=?;"
        return new Promise((resolve, reject) => {
            conexao.query(sql, [selecao, id], (erro, resultado) => {
                if(erro) return reject('Não foi possível Atualizar Seleção')
                // Fazer o parse dos resultados
                const row = JSON.parse(JSON.stringify(resultado))
                return resolve(row)
            })
        })
    }

    delete(id) {
        const sql = "DELETE from selecoes WHERE id=?;"
        return new Promise((resolve, reject) => {
            conexao.query(sql, id, (erro, resultado) => {
                if(erro) return reject('Não foi possível Deletar Seleção')
                // Fazer o parse dos resultados
                const row = JSON.parse(JSON.stringify(resultado))
                return resolve(row)
            })
        })
    }

}

export default new SelecaoRepository()