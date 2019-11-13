const mongoose = require('mongoose');

const schemaObject = {
  url: {
    type: String,
    // TODO: validate that the URL actually is a URL and not just a normal string
  }
};

const schema = new mongoose.Schema(schemaObject);
const Resource = mongoose.model('Resource', schema);

module.exports = Resource;

/**
 * Creates a resource and saves it to the MongoDB resources collection.
 * @param {String} url A URL to a useful resource.
 * @return {Promise<Resource>} A promise that resolves to the created resource.
 * @example
 * const createResource = require('./models/resource').createResource;
 * const resource = await createResource('https://maps.org');
 */
module.exports.createResource = async (url) => {
  return Resource.create({url: url}).then((resource) => {
    return resource.save();
  });
}

/**
 * @todo Write documentation. Use `createResource` as a guide.
 */
module.exports.getAllResources = async () => {
  return Resource.find();
}

/**
 * @todo Write documentation. Use `createResource` as a guide.
 */
module.exports.grabResourceById = async (id) => {
  return Resource.findById(id);
}
