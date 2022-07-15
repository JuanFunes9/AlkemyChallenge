const router = require( 'express' ).Router();

//controllers
const movies = require( '../controllers/movies.controller' );


router.get( '/', ( req, res ) => {
  movies.getMovies()
    .then( movies => res.json( movies ) );
} );

router.get( '/:id', ( req, res ) => {
  movies.getMovieById( req.params.id )
    .then( movie => res.json( movie ) );
} );

router.post( '/', ( req, res ) => {
  movies.newMovie( req.body )
    .then( resp => res.json( resp ) )
} )

router.put( '/:id', ( req, res ) => {
  movies.editMovie( req.params.id, req.body )
    .then( resp => res.json( resp ) )
} )

router.delete( '/:id', ( req, res ) => {
  movies.deleteMovie( req.params.id )
    .then( resp => res.json( resp ) )
} )

module.exports = router;