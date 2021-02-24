const express = require("express")
const router = express.Router()
const {query} = require('../database')

router.get('/admin/get/sales', (req, res) => {
  let sql = `select * from sales`;
  query(sql, (err, data) => {
    if(err) {
      return res.status(500).send(err);
    };
    return res.status(200).send(data)
  });
});

router.get('/get/report', async (req,res) => {
	let sql = `select
	s.name,
	s.no_hp,
	count(c.id) as 'total_client',
	sum(c.credit) as 'total_credit
	from sales s
	join client c on c.id_sales = s.id
	order by total_credit`
	try {
		const data = await query(sql)
		res.status(200).send(data)
	}catch(err){
		res.status(500).send(err)
	}
})

module.exports = router