using Microsoft.AspNetCore.Mvc;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Moq;
using System;
using System.Collections.Generic;
using WebService.Classes;
using WebService.Controllers;
using WebService.Interfaces;
using WebService.Models;

namespace WebService.CoreTests
{
    [TestClass]
    public class ControllerTests
    {
        //
        //Set this up for using Moq and then decided to use simpler test for demo
        //

        private Mock<DataContext> dbCxt = new Mock<DataContext>();
        private DataController controller;
        //private Mock<DataController> controller;
        //private IDataController controllerObj;

        [TestInitialize()]
        public void Setup()
        {
            //controller = new Mock<DataController>(dbCxt.Object);
            controller = new DataController(dbCxt.Object);
        }

        [TestMethod()]
        public void GetTestBadID()
        {
            try
            {
                var result = controller.Get(0);
            }
            catch (ArgumentException ex)
            {
                Assert.AreEqual(ex.Message, "You must supply a valid ID.");
            }
        }

        [TestCleanup()]
        public void TearDown()
        {
            controller.Dispose();
        }
    }
}
