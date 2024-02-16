// delete
const jane = await User.create({ name: "Jane" });
console.log(jane.name); // "Jane"
await jane.destroy();
// Now this entry was removed from the database

//paranoid - soft table
class Post extends Model {}
Post.init(
  {
    /* attributes here */
  },
  {
    sequelize,
    paranoid: true,

    // If you want to give a custom name to the deletedAt column
    deletedAt: "destroyTime",
  }
);

// If you really want a hard-deletion and your model is paranoid, you can force it using the force: true option:

await Post.destroy({
  where: {
    id: 1
  },
  force: true
});


// To restore soft-deleted records, you can use the restore method, which comes both in the static version as well as in the instance 

const post = await Post.create({ title: 'test' });
console.log(post instanceof Post); // true
await post.destroy();
console.log('soft-deleted!');
await post.restore();
console.log('restored!');



await Post.findAll({
    where: { foo: 'bar' },
    paranoid: false
  }); // This will also retrieve soft-deleted records