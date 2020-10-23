const businesses = require("../data/businesses");
const businessesCount = businesses.length;

//
//
// User List, Show, Create functions - These interactive with local databases to list all, show 1, or create data

const list = (req, res) => {
  return res.json(businesses);
};

const show = (req, res) => {
  const id = req.params.businessId;

  const foundBusiness = businesses.find(
    (business) => business.businessId === Number(id)
  );
  console.log(foundBusiness);
  res.json(foundBusiness);
};

const create = (req, res) => {
  const business = {
    businessId: businessesCount + 1,
    ...req.body,
  };
  if (
    !business.id ||
    !business.name ||
    !business.city ||
    !business.state ||
    !business.chain ||
    !business.nationalCompany ||
    !business.militaryDiscount
  ) {
    return res.status(400).json({
      msg: `Please enter an id, name, city, state, chain, nationalCompany, militaryDiscount`,
    });
  }
  businesses.push(business);
  res.json(businesses);
};

module.exports = { list, show, create };
