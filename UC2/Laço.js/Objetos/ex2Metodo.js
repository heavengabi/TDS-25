robo = 
{
    nome : 'Brook',
    marca : 'Playmobil',
    dataFabr : 'Vinte e dois de novembro de 2007',
    apresentar : function ()
    {
        console.log(`oLá VoCê🤖 Me ChAmO ${robo.nome} E fUi FaBrIcAdO em ${robo.dataFabr}`)
    },

    fala : function()
    {
        console.log(`MiSsÃo: dOmInAr o mUnDo. pRoBlEmA: eRrEi a sEnHa dE aCcEsSo dE nOvO.`)
    }
}

robo.apresentar()
robo.fala()