var volume = new KVS.LobsterData();
var screen = new KVS.THREEScreen();

var surfaces;
var isovalue = 0;
var bounds;

function main()
{
    screen.init( volume, {
        width: window.innerWidth * 0.8,
        height: window.innerHeight,
        enableAutoResize: false
    });

    bounds = Bounds( volume );
    screen.scene.add( bounds );

    isovalue = 128;
    surfaces = Isosurfaces( volume, isovalue, screen ,0);
    screen.scene.add( surfaces );

    document.addEventListener( 'mousemove', function() {
        screen.light.position.copy( screen.camera.position );
    });

    window.addEventListener( 'resize', function() {
        screen.resize( [ window.innerWidth * 0.8, window.innerHeight ] );
    });

    screen.loop();
}

function setIsoValue(newIsoValue){
    isovalue = newIsoValue;
    screen.scene.remove( surfaces );
    surfaces = Isosurfaces( volume, isovalue, screen ,1);
    screen.scene.add( surfaces );
}

function setShader(newShader){
		if(newShader == 0)
		{
			screen.scene.remove( surfaces );
			bounds = Bounds( volume );
			screen.scene.add( bounds );
			surfaces = Isosurfaces( volume, isovalue, screen ,0);
			screen.scene.add( surfaces );
			document.addEventListener( 'mousemove', function() {
					screen.light.position.copy( screen.camera.position );
			});
			window.addEventListener( 'resize', function() {
					screen.resize( [ window.innerWidth * 0.8, window.innerHeight ] );
			});
		}
		else if(newShader == 1)
		{
			screen.scene.remove( surfaces );
			bounds = Bounds( volume );
			screen.scene.add( bounds );
			surfaces = Isosurfaces( volume, isovalue, screen ,1);
			screen.scene.add( surfaces );

			document.addEventListener( 'mousemove', function() {
					screen.light.position.copy( screen.camera.position );
			});

			window.addEventListener( 'resize', function() {
					screen.resize( [ window.innerWidth * 0.8, window.innerHeight ] );
			});
		}
		else if(newShader == 2)
		{
			screen.scene.remove( surfaces );
			bounds = Bounds( volume );
			screen.scene.add( bounds );
			surfaces = Isosurfaces( volume, isovalue, screen ,2);
			screen.scene.add( surfaces );

			document.addEventListener( 'mousemove', function() {
					screen.light.position.copy( screen.camera.position );
			});

			window.addEventListener( 'resize', function() {
					screen.resize( [ window.innerWidth * 0.8, window.innerHeight ] );
			});
		}
		else if(newShader == 3)
		{
			screen.scene.remove( surfaces );
			bounds = Bounds( volume );
			screen.scene.add( bounds );
			surfaces = Isosurfaces( volume, isovalue, screen ,3);
			screen.scene.add( surfaces );

			document.addEventListener( 'mousemove', function() {
					screen.light.position.copy( screen.camera.position );
			});

			window.addEventListener( 'resize', function() {
					screen.resize( [ window.innerWidth * 0.8, window.innerHeight ] );
			});
		}
		else if(newShader == 4)
		{
			screen.scene.remove( surfaces );
			bounds = Bounds( volume );
			screen.scene.add( bounds );
			surfaces = Isosurfaces( volume, isovalue, screen ,4);
			screen.scene.add( surfaces );

			document.addEventListener( 'mousemove', function() {
					screen.light.position.copy( screen.camera.position );
			});

			window.addEventListener( 'resize', function() {
					screen.resize( [ window.innerWidth * 0.8, window.innerHeight ] );
			});
		}
		else if(newShader == 5)
		{
			screen.scene.remove( surfaces );
			bounds = Bounds( volume );
			screen.scene.add( bounds );
			surfaces = Isosurfaces( volume, isovalue, screen ,5);
			screen.scene.add( surfaces );

			document.addEventListener( 'mousemove', function() {
					screen.light.position.copy( screen.camera.position );
			});

			window.addEventListener( 'resize', function() {
					screen.resize( [ window.innerWidth * 0.8, window.innerHeight ] );
			});
		}
	
}


