const mongoose = require('mongoose');

const MONGO_URI =
  'mongodb+srv://jvtran48:codesmith@codesmith.ubdnkip.mongodb.net/?retryWrites=true&w=majority';

mongoose
  .connect(MONGO_URI, {
    // options for the connect method to parse the URI
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // sets the name of the DB that our collections are part of
    dbName: 'soloproject',
  })
  .then(() => console.log('Connected to Mongo DB.!!!'))
  .catch((err) => console.log(err));

const Schema = mongoose.Schema;

const teamsSchema = new Schema({
  name: { type: String, required: true },
  password: { type: String, required: true },
  users: Array,
});

const Teams = mongoose.mongoose.model('teams', teamsSchema);

const usersSchema = new Schema({
  team_id: { type: Schema.Types.ObjectId, ref: 'teams' },
  name: { type: String, required: true },
  tasks: Array,
});

const Users = mongoose.mongoose.model('users', usersSchema);

module.exports = { Teams, Users };
