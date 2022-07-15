const router = require( 'express' ).Router();

//controllers
const personajes = require( '../controllers/personajes.controller' );


router.get( '/', ( req, res ) => {
  personajes.getPersonajes( req.query )
    .then( personajes => res.json( personajes ) );
} );

router.get( '/:id', ( req, res ) => {
  personajes.getPersonajesById( req.params.id )
    .then( personajes => res.json( personajes ) );
} );

router.post( '/', ( req, res ) => {
  personajes.newPersonaje( req.body )
    .then( resp => res.json( resp ) )
} )

router.put( '/:id', ( req, res ) => {
  personajes.editPersonaje( req.params.id, req.body )
    .then( resp => res.json( resp ) )
} )

router.delete( '/:id', ( req, res ) => {
  personajes.deletePersonaje( req.params.id )
    .then( resp => res.json( resp ) )
} )

module.exports = router;