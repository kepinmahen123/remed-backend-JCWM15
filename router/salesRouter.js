const express = require("express")
const router = express.Router()
const {query} = require('../database')

router.get('/', (req, res) => {
  let sql = `select * from client`;
  query(sql, (err, data) => {
    if(err) {
      return res.status(500).send(err);
    };
    return res.status(200).send(data)
  });
});

router.post('sales/add/client', async(req, res) => {
	try {
		const {
			name,
			address,
			hp,
			zip_code,
			credit,
			id_sales
		} = req.body
		await query(`insert into client (name, address, no_hp, zip_code, credit, id_sales) values ('${name})','${address})',${hp}),
		${zip_code}),${credit}),${id_sales}),`)
		return res.status(200).send({message: 'Data Added', status: 'Added'})
	} catch(err){
		return res.status(500).send(err)
	}
})

router.patch("/:id", async (req, res) => {
  try {
    const {id} = req.params
    await query(`select * from client where id = ${id}`)
    const {name} = req.body
    const response = await query(
      `update client set name = '${name}' where id = ${id}`
    )
    return res.status(200).send(response)
  } catch (err) {
    return res.status(500).send(err)
  }
})

router.delete("/:id", async (req, res) => {
  try{
    const {id} = req.params
    const response = await query (
      `select * from client where id = ${id}`
    )
    const id = response[0].id
    const deleteresponse = await query(
      `delete from client where id = ${id}`
      )
      return res.status(200).send(deleteresponse)
  }catch(err) {
    return res.status(500).send(err)
  }
})

module.exports = router